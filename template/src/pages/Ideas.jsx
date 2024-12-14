import { useDensity } from "@salt-ds/core";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { useTheme } from "next-themes";

// import { defaultData } from "./data";
const columnDefs = [
  {
    headerName: "Name",
    field: "name",
    filterParams: { buttons: ["reset", "apply"] },
    editable: false,
    autoHeight: true,
  },
  { headerName: "Problem", field: "problem", editable: true },
  { headerName: "Solution", field: "solution" },
  { headerName: "Solution", field: "solution" },
  { headerName: "Solution", field: "solution" },
  { headerName: "Solution", field: "solution" },
  { headerName: "Solution", field: "solution" },
  { headerName: "Solution", field: "solution" },
  { headerName: "Solution", field: "solution" },
];
const Ideas = () => {
  const { theme } = useTheme();

  const density = useDensity();
  const onGridReady = ({ api }) => {
    api.sizeColumnsToFit();
  };
  const rowHeight = useMemo(() => {
    switch (density) {
      case "high":
        return 25;
      case "medium":
        return 37;
      case "low":
        return 49;
      case "touch":
        return 61;
      default:
        return 25;
    }
  }, [density]);
  return (
    <div
      className={`ag-theme-salt-${theme} ag-theme-salt-variant-zebra`}
      style={{ height: 500, width: "100%" }}
    >
      {" "}
      <AgGridReact
        columnDefs={columnDefs}
        rowData={[
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
          {
            name: "ideation gateway",
            solution: "adsflkajdsflakjdsfalkdjsfalkdsjfalksdjfalkdsjfalksdfj",
          },
        ]}
        rowSelection="single"
        enableRangeSelection={true}
        singleClickEdit={true}
        onGridReady={onGridReady}
        rowHeight={rowHeight}
      />{" "}
    </div>
  );
};

export default Ideas;
