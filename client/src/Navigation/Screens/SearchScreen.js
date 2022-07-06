import React, { useState, useEffect } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text } from "react-native";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([{}]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    fetch("/searchdata")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <SearchBar
      platform="ios"
      placeholder="Enter Manga Title..."
      onChangeText={updateSearch}
      value={search}
    />
  );
}
