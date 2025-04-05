import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SummaryCard from '../components/SummaryCard';

const Dashboard = () => {
  const data = [
    { title: 'Malware Detected', value: 3, color: '#e53935' },
    { title: 'Cookies Rejected', value: 15, color: '#fb8c00' },
    { title: 'Usage Logs', value: 102, color: '#1e88e5' },
    { title: 'Risks Found', value: 5, color: '#8e24aa' },
    { title: 'Feedback Count', value: 12, color: '#43a047' },
    { title: 'Trust Score', value: '88%', color: '#00bfa5' },
    { title: 'Admin Logs', value: 7, color: '#fdd835' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📊 Privacy Dashboard</Text>
      {data.map((item, idx) => (
        <SummaryCard key={idx} title={item.title} value={item.value} color={item.color} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Dashboard;
