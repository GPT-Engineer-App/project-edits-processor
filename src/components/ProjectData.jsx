import React, { useState } from "react";
import { Box, Button, Code, Heading, Input, Stack, Text } from "@chakra-ui/react";

const sampleData = [
  {
    id: 1,
    projectId: "abc123",
    createdAt: "2023-04-12T10:30:00Z",
    editNumber: 1,
    status: "completed",
    error: null,
    oldCode: "function old() {}",
    newCode: "function new() {}",
  },
  {
    id: 2,
    projectId: "abc123",
    createdAt: "2023-04-12T11:15:00Z",
    editNumber: 2,
    status: "error",
    error: "Syntax error",
    oldCode: "function old() {}",
    newCode: "function new() {",
  },
  {
    id: 3,
    projectId: "def456",
    createdAt: "2023-04-11T09:45:00Z",
    editNumber: 1,
    status: "completed",
    error: null,
    oldCode: "const x = 1;",
    newCode: "const x = 2;",
  },
];

export default function ProjectData() {
  const [projectId, setProjectId] = useState("");
  const [data, setData] = useState(null);
  const [expandedEdit, setExpandedEdit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const projectData = sampleData.filter((edit) => edit.projectId === projectId);
    setData(projectData);
  };

  return (
    <Box>
      <Heading as="h1" mb={4}>
        Project Data
      </Heading>
      <Box as="form" onSubmit={handleSubmit} mb={8}>
        <Stack direction="row" spacing={4}>
          <Input value={projectId} onChange={(e) => setProjectId(e.target.value)} placeholder="Enter project ID" />
          <Button type="submit" colorScheme="blue">
            Load Data
          </Button>
        </Stack>
      </Box>
      {data && (
        <Stack spacing={8}>
          {data.map((edit) => (
            <Box key={edit.id} borderWidth={1} borderRadius="lg" p={4}>
              <Heading as="h2" size="md" mb={2}>
                Edit #{edit.editNumber}
              </Heading>
              <Text>
                <strong>ID:</strong> {edit.id}
              </Text>
              <Text>
                <strong>Created At:</strong> {edit.createdAt}
              </Text>
              <Text>
                <strong>Status:</strong> {edit.status}
              </Text>
              {edit.error && (
                <Text color="red.500">
                  <strong>Error:</strong> {edit.error}
                </Text>
              )}
              <Button size="sm" mt={2} onClick={() => setExpandedEdit(expandedEdit === edit.id ? null : edit.id)}>
                {expandedEdit === edit.id ? "Collapse" : "Expand"} Code
              </Button>
              {expandedEdit === edit.id && (
                <Box mt={4}>
                  <Text>
                    <strong>Old Code:</strong>
                  </Text>
                  <Code display="block" whiteSpace="pre" p={2}>
                    {edit.oldCode}
                  </Code>
                  <Text>
                    <strong>New Code:</strong>
                  </Text>
                  <Code display="block" whiteSpace="pre" p={2}>
                    {edit.newCode}
                  </Code>
                </Box>
              )}
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
}
