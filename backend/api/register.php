<?php
require_once('../db/connect.php');

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  $username = $data['username'];
  $password = $data['password'];
  $role = $data['role'];

  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  $stmt = $conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $username, $hashed_password, $role);

  if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Registration successful']);
  } else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $stmt->error]);
  }

  $stmt->close();
  $conn->close();
}
?>
