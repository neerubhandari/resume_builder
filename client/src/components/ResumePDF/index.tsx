import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Svg,
  Path,
} from "@react-pdf/renderer";
import type {
  EducationItem,
  ExperienceItem,
  ProjectItem,
  ResumeFormData,
  SkillItem,
} from "../../types/resume";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 11 },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    paddingBottom: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    marginBottom: 6,
    textAlign: "center",
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 6,
    fontSize: 10,
  },

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

type ResumePDFProps = {
  formData: ResumeFormData;
};
const ResumePDF = ({ formData }: ResumePDFProps) => (
  <Document>
    <Page style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {formData?.personalInfo?.name || "Your Name"}
        </Text>
        {/* CONTACT LINE */}
        <View style={styles.contactRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {" "}
            <Svg width="12" height="12" viewBox="0 0 24 24">
              <Path
                d="M4 6h16v12H4z"
                stroke="#000"
                strokeWidth={1.5}
                fill="none"
              />
              <Path
                d="M4 6l8 6 8-6"
                stroke="#000"
                strokeWidth={1.5}
                fill="none"
              />
            </Svg>
            <Text>{formData?.personalInfo?.email}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Svg width="12" height="12" viewBox="0 0 24 24">
              <Path
                d="M6 2h4l2 5-3 2c1 3 3 5 6 6l2-3 5 2v4c0 1-1 2-2 2C11 20 4 13 4 4c0-1 1-2 2-2z"
                fill="black"
              />
            </Svg>
            <Text>{formData?.personalInfo?.phone}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Svg width="12" height="12" viewBox="0 0 24 24">
              <Path
                d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"
                fill="black"
              />
              <Path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="white" />
            </Svg>
            <Text>{formData?.personalInfo?.location}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Svg width="12" height="12" viewBox="0 0 24 24">
              <Path d="M4 4h16v16H4V4z" fill="black" />
              <Path
                d="M7 10v7M7 7v.01M11 10v7M11 10c0-1.5 1-2 2-2s2 .5 2 2v7"
                stroke="white"
                strokeWidth={1.5}
              />
            </Svg>
            <Text>{formData?.personalInfo?.linkedIn}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Svg width="12" height="12" viewBox="0 0 24 24">
              <Path
                d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
                fill="none"
                stroke="black"
              />
              <Path d="M2 12h20" stroke="black" />
            </Svg>
            <Text>{formData?.personalInfo?.website}</Text>
          </View>
        </View>
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

          {formData.experience.map((exp: ExperienceItem, i: number) => (
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

          {formData.education.map((edu: EducationItem, i: number) => (
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

          {formData.projects.map((p: ProjectItem, i: number) => (
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

          {formData.skills.map((s: SkillItem, i: number) => (
            <Text key={i}>• {s.skillSet}</Text>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;
