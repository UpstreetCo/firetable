import React, { lazy } from "react";
import { IFieldConfig, FieldType } from "components/fields/types";
import withCustomCell from "components/Table/withCustomCell";

import DurationIcon from "@material-ui/icons/CheckBox";
import BasicCell from "./BasicCell";
import NullEditor from "components/Table/editors/NullEditor";

const TableCell = lazy(
  () => import("./TableCell" /* webpackChunkName: "TableCell-Duration" */)
);
const SideDrawerField = lazy(
  () =>
    import(
      "./SideDrawerField" /* webpackChunkName: "SideDrawerField-Duration" */
    )
);

export const config: IFieldConfig = {
  type: FieldType.duration,
  name: "Duration",
  dataType:
    "{ start: firebase.firestore.Timestamp, end?: firebase.firestore.Timestamp }",
  icon: <DurationIcon />,
  description: "Duration calculated from two timestamps.",
  TableCell: withCustomCell(TableCell, BasicCell),
  TableEditor: NullEditor,
  SideDrawerField,
};
export default config;
