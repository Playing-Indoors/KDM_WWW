import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import CardList from "../../components/CardList/CardList";
import CardListMeta from "../../components/CardList/CardListMeta";

class Settlements extends React.Component {
  render() {
    return (
      <div>
        <Header name={"Campaigns"} showBack>
          <Link to={"/campaigns/create"} className="header-action">
            <Icon name={"plus"} />
          </Link>
        </Header>
        <div className="layout">
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
          <CardList
            name="Campaing Name"
            desc="People of the Stars"
            href="#route"
          >
            <CardListMeta value="Lantern Year 00" />
            <CardListMeta value="Population 00" />
            <CardListMeta value="Players 0" />
          </CardList>
        </div>
      </div>
    );
  }
}

export default Settlements;
