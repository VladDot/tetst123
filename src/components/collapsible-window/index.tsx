import { useEffect, useRef, useState } from "react";

import { ChildrenProps } from "../../types";

import { getStyles } from "./styles";
import { TypesCollapsibleWindow } from "./types";

export const CollapsibleWindow = ({
    onClick,
    isActive,
    children,
    disabled,
    className,
    closingHeight,
}: ChildrenProps<TypesCollapsibleWindow>) => {
    const childRef = useRef<HTMLDivElement>(null);

    const { wrapper } = getStyles(isActive, className);

    const [height, setHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (disabled && childRef && childRef.current) {
            setHeight(childRef.current.offsetHeight);
        }
        if (isActive && childRef && childRef.current && !disabled) {
            setHeight(childRef.current.offsetHeight);
        }

        if (!isActive && childRef && childRef.current && !disabled) {
            setHeight(closingHeight * childRef.current.offsetHeight);
        }
    }, [isActive, closingHeight, disabled]);

    // TODO Продумать кнопку или друго опазнавательный знак для read more

    if (!children) return null;

    return (
        <div
            className={wrapper}
            style={{ height: !height ? "inherit" : height }}
        >
            <div
                ref={childRef}
                onClick={() => (onClick && !disabled ? onClick() : null)}
            >
                {children}
            </div>
        </div>
    );
};
