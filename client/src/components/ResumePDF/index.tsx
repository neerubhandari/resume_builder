import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 11 },
  header: {
    textAlign: "center",
    marginBottom: 20,
    borderBottom: 1,
    paddingBottom: 10,
  },
  name: { fontSize: 20, marginBottom: 5, color: "#3b82f6" },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    fontSize: 10,
    marginTop: 5,
  },

  section: { marginBottom: 12 },
  title: { fontSize: 14, marginBottom: 6, color: "#3b82f6" },

  item: { marginBottom: 6 },
});

const ResumePDF = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {formData?.personalInfo?.fullName || "Your Name"}
        </Text>

        <Text>{formData?.personalInfo?.email}</Text>
        <Text>{formData?.personalInfo?.phone}</Text>
        <Text>{formData?.personalInfo?.location}</Text>
        <Text>{formData?.personalInfo?.linkedIn}</Text>
        <Text>{formData?.personalInfo?.website}</Text>
      </View>

      {/* SUMMARY */}
      {formData?.summary && (
        <View style={styles.section}>
          <Text style={styles.title}>PROFESSIONAL SUMMARY</Text>
          <Text>{formData.summary}</Text>
        </View>
      )}

      {/* EXPERIENCE */}
      {formData?.experience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>EXPERIENCE</Text>

          {formData.experience.map((exp, i) => (
            <View key={i} style={styles.item}>
              <Text>{exp.jobTitle}</Text>
              <Text>{exp.companyName}</Text>
              <Text>
                {exp.startDate} - {exp.endDate}
              </Text>
              <Text>{exp.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* EDUCATION */}
      {formData?.education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>EDUCATION</Text>

          {formData.education.map((edu, i) => (
            <View key={i} style={styles.item}>
              <Text>
                {edu.degreeName} in {edu.fieldOfStudy}
              </Text>
              <Text>{edu.institutionName}</Text>
              <Text>{edu.gpaScore}</Text>
              <Text>{edu.endDate}</Text>
            </View>
          ))}
        </View>
      )}

      {/* PROJECTS */}
      {formData?.projects?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>PROJECTS</Text>

          {formData.projects.map((p, i) => (
            <View key={i} style={styles.item}>
              <Text>{p.projectName}</Text>
              <Text>{p.projectDescription}</Text>
            </View>
          ))}
        </View>
      )}

      {/* SKILLS */}
      {formData?.skills?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>SKILLS</Text>

          {formData.skills.map((s, i) => (
            <Text key={i}>• {s.skillSet}</Text>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;
