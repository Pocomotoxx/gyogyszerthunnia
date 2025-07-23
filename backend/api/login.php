<?php
require_once('../db/connect.php');

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  $username = $data['username'];
  $password = $data['password'];

  $stmt = $conn->prepare("SELECT id, username, password, role FROM users WHERE username = ?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
      session_start();
      $_SESSION['user_id'] = $user['id'];
      $_SESSION['username'] = $user['username'];
      $_SESSION['role'] = $user['role'];
      echo json_encode(['success' => true, 'message' => 'Login successful', 'user' => ['username' => $user['username'], 'role' => $user['role']]]);
    } else {
      echo json_encode(['success' => false, 'message' => 'Invalid password']);
    }
  } else {
    echo json_encode(['success' => false, 'message' => 'User not found']);
  }

  $stmt->close();
  $conn->close();
}
?>
