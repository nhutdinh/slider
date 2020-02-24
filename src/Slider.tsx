import React, { useEffect } from "react";

import wNumb from "wnumb";
import noUiSlider, { Options } from "nouislider";
import "nouislider/distribute/nouislider.css";

type SliderCallbackFnType = (
  sliderInstance: noUiSlider.noUiSlider,
  values: number[],
  handle: number
) => void;

export interface SliderProps {
  onChange?: SliderCallbackFnType;
  onStart?: SliderCallbackFnType;
  onSlide?: SliderCallbackFnType;
  onUpdate?: SliderCallbackFnType;
  onSet?: SliderCallbackFnType;
  onEnd?: SliderCallbackFnType;
}

type AllProps = SliderProps & Partial<Options>;

const Slider: React.FC<AllProps> = (props: AllProps): React.ReactElement => {
  let sliderRef = React.createRef<HTMLDivElement>();
  let sliderInstance: noUiSlider.noUiSlider;
  function filterPips(value, type) {
    if (type === 0) {
      return value === 62 || value === 83 ? 1 : value === 28 ? 1 : -1;
    }
    // console.log(type, value);
    // if (type === 0) {
    //   return value < 2000 ? -1 : 0;
    // }
    // return value % 1000 ? 2 : 1;
    return value === 62 || value === 83 ? 1 : -1;
  }
  const defaultOptions: noUiSlider.Options = {
    tooltips: [
      {
        from: Number,
        to: function(value) {
          return "<span>Age</span> " + value.toFixed(0);
        }
      }
    ],
    range: {
      min: 28,
      max: 120
    },
    connect: "lower",

    step: 1,

    // Handles start at ...
    start: [0],

    // Move handle on tap, bars are draggable
    behaviour: "tap-drag",
    format: wNumb({ decimals: 0 }),
    pips: {
      mode: "steps",
      density: 3,
      filter: filterPips,
      format: {
        from: Number,
        to: function(value) {
          return `<div>${
            value === 83
              ? "til live age is " + value.toFixed(0) + " years old"
              : "anything"
          }</div>`;
        }
      }
    }
  };

  useEffect(() => {
    sliderInstance = noUiSlider.create(sliderRef.current, defaultOptions);

    props.onChange &&
      sliderInstance.on("change", (values: number[], handle: number): void => {
        props.onChange(sliderInstance, values, handle);
      });
    props.onStart &&
      sliderInstance.on("start", (values: number[], handle: number): void => {
        props.onStart(sliderInstance, values, handle);
      });
    props.onSlide &&
      sliderInstance.on("slide", (values: number[], handle: number): void => {
        props.onSlide(sliderInstance, values, handle);
      });
    props.onUpdate &&
      sliderInstance.on("update", (values: number[], handle: number): void => {
        props.onUpdate(sliderInstance, values, handle);
      });
    props.onSet &&
      sliderInstance.on("set", (values: number[], handle: number): void => {
        props.onSet(sliderInstance, values, handle);
      });
    props.onUpdate &&
      sliderInstance.on("end", (values: number[], handle: number): void => {
        props.onEnd(sliderInstance, values, handle);
      });

    return (): void => {
      sliderInstance.destroy();
      console.log("destroy!!!");
    };
  }, []);

  return (
    <div>
      <div className="abc" ref={sliderRef}></div>
    </div>
  );
};

export default Slider;
