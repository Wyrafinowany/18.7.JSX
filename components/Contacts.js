var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render() {
    var contacts = this.props.items.map(function(contact) {
      return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
      <ul className={'contactList'}>
        {contacts}
      </ul>
    );
  }
});