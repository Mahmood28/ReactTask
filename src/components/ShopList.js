import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ShopItem from "./ShopItem";
import { ListWrapper } from "../styles";
import Loading from "./Loading";
const ShopList = () => {
  const shops = useSelector((state) => state.shopReducer.shops);
  const [query, setQuery] = useState("");

  const loading = useSelector((state) => state.shopReducer.loading);

  if (loading)
    return (
      <ListWrapper>
        <Loading />
      </ListWrapper>
    );

  const shopList = shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem key={shop.id} shop={shop} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper> {shopList}</ListWrapper>
    </div>
  );
};

export default ShopList;
