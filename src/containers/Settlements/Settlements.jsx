import React from "react";
import { Button } from "reactstrap";
import CardList from "../../components/CardList/CardList";
import CardListMeta from "../../components/CardList/CardListMeta";

class Settlements extends React.Component {
  render() {
    return (
      <div>
        <Button color="secondary" block className="mb-3">
          Create New Settlement
        </Button>
        <CardList
          name="Campaing Name"
          desc="People of the Lantern"
          href="#route"
        >
          <CardListMeta value="Lantern Year 00" />
          <CardListMeta value="Population 00" />
          <CardListMeta value="Players 0" />
        </CardList>
        <CardList name="Campaing Name" desc="People of the Sun" href="#route">
          <CardListMeta value="Lantern Year 00" />
          <CardListMeta value="Population 00" />
          <CardListMeta value="Players 0" />
        </CardList>
        <CardList name="Campaing Name" desc="People of the Stars" href="#route">
          <CardListMeta value="Lantern Year 00" />
          <CardListMeta value="Population 00" />
          <CardListMeta value="Players 0" />
        </CardList>
      </div>
    );
  }
}

export default Settlements;
