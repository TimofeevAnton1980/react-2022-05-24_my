import React from "react";
import { Tab } from "../../components/Tab/Tab";

interface Interface {
     restaurantId: string | undefined, className?: {}, name: string | undefined
}
export const MenuReviewTabContainer = ({ restaurantId, className, name }: Interface) => {

    return <Tab title={name} to={`${restaurantId}/${name}`} className={className} />;
};
