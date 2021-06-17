import React from 'react';
import './App.css';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, ColumnSeries, 
  Inject, Tooltip} from '@syncfusion/ej2-react-charts';
import {sampleData, sampleData2} from './data';
function App() {
  return (
    <div style={{textAlign:"center", margin:'5%'}}>
      <ChartComponent width="70%" title="England vs West Indies" 
      legendSettings={{visible:true}}
      primaryXAxis={{title:"Death Overs", labelFormat:"Over {value}",
      edgeLabelPlacement:"Shift"}} 
      //To render html template in tooltip 
      //Add template:"<span style='border: 1px solid black; background-color: #82E0AA; color:blue; font-weight:bold; padding:8px;'>${y} Runs</span>" in tooltip settings and remove the format and border options
      // eslint-disable-next-line
      tooltip={{enable:true, format:"${point.x}: <b>${point.y} Runs</b>",
      border:{width:2, color:"#82E0AA"}}}>
        <Inject services={[ColumnSeries, Legend, Tooltip]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Column" name="England" dataSource={sampleData}
          xName="overs" yName="runs"></SeriesDirective>
          <SeriesDirective type="Column" name="West Indies" dataSource={sampleData2}
          xName="overs" yName="runs"></SeriesDirective> 
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default App;
