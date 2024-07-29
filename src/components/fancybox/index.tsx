"use client";
import React, { useRef, useEffect, PropsWithChildren } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

interface Props {
  options?: Partial<OptionsType>;
  delegate?: string;
  setFancyboxIsActive?: Function;
}

export function Fancybox(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null);
  const setFancyboxIsActive = props.setFancyboxIsActive || undefined;

  if (setFancyboxIsActive) {
    NativeFancybox.defaults.on = {
      init: () => {
        setFancyboxIsActive(true);
      },
      close: () => {
        setFancyboxIsActive(false);
      },
    };
  }

  const delegate = props.delegate || "[data-fancybox]";
  const options = props.options || {};

  useEffect(() => {
    const container = containerRef.current;

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);

      // !!! Commented out to prevent closing on re-render
      // NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}
