import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "./index.ts";
import styles from "./styles.module.css";

function AnimatedComponent() {
  const [open, toggle] = useState(false);
  const [ref, { height }] = useMeasure();
  const props = useSpring({ height: open ? height : 0 });

  return (
    <section className={styles.container}>
      <section ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>
          {props.height.to((y) => y.toFixed(0))}
        </animated.div>
      </section>
    </section>
  );
}

export default AnimatedComponent;
