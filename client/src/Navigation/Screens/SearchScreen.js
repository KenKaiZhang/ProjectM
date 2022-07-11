import React, { useState, useEffect } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text } from "react-native";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  const updateSearch = (search) => {
    setSearch(search);
  };

  const enterSearch = () => {
    console.log(search);
    fetch("http://127.0.0.1:5000/search", {
      method: "POST",
      cache: "no-cache",
      headers: {
        content_type: "application/json",
      },
      body: JSON.stringify(search),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchImage = () => {};

  return (
    <React.Fragment>
      <SearchBar
        platform="ios"
        placeholder="Enter Manga Title..."
        onChangeText={updateSearch}
        onSubmitEditing={enterSearch}
        value={search}
      />
      <View>
        {Object.keys(data).map((key, index) => (
          <Text key={index}>{key}</Text>
        ))}
      </View>
    </React.Fragment>
  );
}
