import "./ChartBar.css"
function ChartBar(props) {
    let heightVal="0%";
    if(props.maxValue>0){
        heightVal=Math.round((props.value/props.maxValue)*100) +"%";
    }
    return (
        <div className="chart_bar">
            <div className="chart_unfilled">
                <div className="chart_filled" style={{height:heightVal}} />
            </div>
            <div className="chart_label">{props.label}</div>
        </div>
    )
}

export default ChartBar
