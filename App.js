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
import AddContactForm from "./AddContactForm";

export default function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(contacts);

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)]);
  };

  if (showForm) return <AddContactForm />;

  return (
    <SafeAreaView style={styles.container}>
      <Button title="toggle contacts" onPress={toggleContacts} />
      <Button title="Add Contact" onPress={toggleForm} />
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
