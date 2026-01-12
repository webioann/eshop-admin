
// THIS IS ICONS HUB FILE ====================================
import { BiDollar } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { CgList } from "react-icons/cg";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { LuHouse, LuShoppingBag, LuClipboardList, LuUsers } from "react-icons/lu";
import { TbReportSearch, TbSettings } from "react-icons/tb";

interface IIconProps {
    size?: number;
    color?: string;
    title?: string;
}

export function Users_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <LuUsers size={size} color={color} title={title} />
        </i>
    )
}
export function ShoppingBag_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <LuShoppingBag size={size} color={color} title={title} />
        </i>
    )
}
export function House_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <LuHouse size={size} color={color} title={title} />
        </i>
    )
}
export function Clipboard_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <LuClipboardList size={size} color={color} title={title} />
        </i>
    )
}
export function Dollar_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <BiDollar size={size} color={color} title={title} />
        </i>
    )
}
export function Settings_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <TbSettings size={size} color={color} title={title} />
        </i>
    )
}
export function ReportSearch_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <TbReportSearch size={size} color={color} title={title} />
        </i>
    )
}
export function CubeOutline_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <IoCubeOutline size={size} color={color} title={title} />
        </i>
    )
}
export function UserCircle_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <FaRegUserCircle size={size} color={color} title={title} />
        </i>
    )
}
export function List_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <CgList size={size} color={color} title={title} />
        </i>
    )
}
export function Sun_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <FiSun size={size} color={color} title={title} />
        </i>
    )
}
export function Moon_Icon({ size, color, title }: IIconProps) {
    const css = {'margin': 0, 'padding': 0};
    return (
        <i style={css}>
            <BsMoonStars size={size} color={color} title={title} />
        </i>
    )
}

