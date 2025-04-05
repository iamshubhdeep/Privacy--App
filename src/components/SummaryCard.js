import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryCard = ({ title, value, color }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  value: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default SummaryCard;
