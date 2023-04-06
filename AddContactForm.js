import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

export const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (name) => {
    setName(name);
  };

  const handlePhoneChange = (phone) => {
    setPhone(phone);
  };

  return (
    <View style={{ paddingTop: 70 }}>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={handleNameChange}
      />
      <TextInput
        value={phone}
        style={styles.input}
        onChangeText={handlePhoneChange}
        keyboardType="numeric"
      />
      <Button title="Add Contact" onPress={addContact} />
    </View>
  );
};

export default AddContactForm;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
  },
});
