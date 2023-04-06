import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Text,
  StatusBar,
  SectionList,
  SafeAreaView,
} from "react-native";

import contacts, { compareNames } from "./contacts";
import ContactsList from "./ContactsList";

export default function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(contacts);

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="toggle contacts" onPress={toggleContacts} />
      <Button title="sort" onPress={sort} />
      {showContacts && <ContactsList contacts={sortedContacts} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight + 10,
  },
});
