var App = React.createClass({
  render: function() {
    var items = this.props.items
      .sort(function(a, b) {
        // Sort by # of subscribers in descending order
        return b.data.subscribers - a.data.subscribers;
      });

    var storyNodes = this.props.items.sort(function(item) {
      return (
        <tr key={item.data.id}>
          <td>
            <p className="score">{item.data.score}</p>
          </td>
          <td>
            <p className="title">
              <a href={item.data.url}>
                {item.data.title}
              </a>
            </p>
            <p className="author">
              Posted by <b>{item.data.author}</b>
            </p>
          </td>
        </tr>
      );
    });

    return (
      <table>
        <tbody>
          {storyNodes}
        </tbody>
      </table>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
