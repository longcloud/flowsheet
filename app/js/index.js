var Parent = require('./components/Parent');

var ExampleApplication = React.createClass({
    render: function() {
        var elapsed = Math.round(this.props.elapsed  / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message =
            'React has been successfully running for ' + seconds + ' seconds.';

        return <div>
            {message}
            <Parent/>
        </div>;
    }
});

var start = new Date().getTime();

setInterval(function() {
    ReactDOM.render(
        <ExampleApplication elapsed={new Date().getTime() - start} />,
        document.getElementById('app')
    );
}, 50);
