---
title: Global Average absolute sea level
datasets: ['global-average-absolute-sea-level-change-1880-2014']
authors:
  - anonymous
---

# Preview of {datasets[0].title}

This is my report about the dataset called {datasets[0].title} it shows the {datasets[0].notes}

<VegaLite
spec={{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Global Average Absolute Sea Level Change, 1880-2014.",
  "data": {"url": "/api/cors?url=https://demo.dev.datopian.com/dataset/f687f64b-313e-4d43-8792-cc0728bd60a2/resource/86431f74-1066-44cc-b13a-3bfcc05d905b/download/epa-sea-level.csv"},
  "transform": [
  {"filter": {"field": "Year",
    "range": [  {"year": 1880},
                {"year": 2005}]}}
],
"mark": "line",
"height": 500,
"width": "container",
"encoding": {
"x": {"field": "Year", "type": "temporal"},
"y": {"field": "Lower Error Bound", "type": "quantitative"}
}
}}
/>

<FlatUiTable url={"/api/cors?url=https://demo.dev.datopian.com/dataset/f687f64b-313e-4d43-8792-cc0728bd60a2/resource/86431f74-1066-44cc-b13a-3bfcc05d905b/download/epa-sea-level.csv"} />
