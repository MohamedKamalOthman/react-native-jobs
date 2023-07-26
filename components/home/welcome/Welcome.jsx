import React from "react";
import { View, TextInput, Text, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Welcome to your dashboard</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a product"
        />
      </View>
    </View>
  );
};

export default Welcome;
