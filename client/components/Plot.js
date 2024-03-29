//Plot.jsx
const renderRegression = () => {
    if (this.props.regression) {
        return (
            <LineSeries
                data={calculateRegression(this.props.data).regressionData}
                color="red"
                animation={"gentle"}
                onNearestX={(value, { index }) =>
                    this.setState({
                        crosshairValues: [
                            calculateRegression(this.props.data).regressionData[
                                index
                            ],
                        ],
                    })
                }
            />
        );
    }
};

return (
    <div className="container">
        <FlexibleWidthXYPlot
            height={400}
            onMouseLeave={() => this.setState({ crosshairValues: [] })}
        >
            <HorizontalGridLines />
            <VerticalGridLines />
            <MarkSeries
                data={this.props.data}
                onNearestX={this._rememberValue}
                animation={"gentle"}
            />
            {value ? (
                <LineSeries
                    data={[
                        { x: value.x, y: value.y },
                        { x: XMAX, y: value.y },
                    ]}
                    stroke="black"
                />
            ) : null}
            {value ? (
                <Hint value={value} getAlignStyle={getAlignStyle}>
                    <div className="rv-hint__content">
                        {`(Year ${value.x}, Marriages: ${value.y})`}
                    </div>
                </Hint>
            ) : null}
            {renderRegression()}
            <XAxis top={0} hideTicks tickValues={years} title="X" />
            <XAxis title="Year" tickFormat={(v) => v} />
            <YAxis title="Number of Marriages" />
            <Crosshair
                values={this.state.crosshairValues}
                style={{
                    line: { backgroundColor: "red" },
                }}
            >
                <div
                    className="rv-hint__content"
                    style={{ backgroundColor: "red" }}
                >
                    <p>
                        Year:{" "}
                        {this.state.crosshairValues[0]
                            ? this.state.crosshairValues[0].x
                            : []}
                    </p>
                    <p>
                        Marriages:{" "}
                        {this.state.crosshairValues[0]
                            ? this.state.crosshairValues[0].y
                            : []}
                    </p>
                </div>
            </Crosshair>
        </FlexibleWidthXYPlot>
    </div>
);
