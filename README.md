# z1ppie

z1ppie is a P2P file sharing application built with Next.js, allowing users to share files quickly and efficiently. The application leverages WebRTC for real-time communication and socket.io for signaling, providing a seamless user experience.

## Features

- **P2P File Sharing**: Share files directly between users without the need for a central server.
- **Real-time Chat**: Communicate with peers while sharing files.
- **Responsive Design**: Works on various devices and screen sizes.
- **Easy to Use**: Intuitive interface for quick file sharing.

## Getting Started

To get started with z1ppie, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later) or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/m3hu1/z1ppie.git
   cd z1ppie
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables. Create a `.env` file in the root directory and add your socket server URL:

   ```
   NEXT_PUBLIC_SOCKET_SERVER_URL=your_socket_server_url
   ```
   > You can use http://localhost:8000 as the socket server url for a local environment.

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Usage
  > Note that both the peers should be on the same network to communicate.
- Navigate to the home page and click on "Start sharing" to begin.
- Enter the peer's token to connect and start sharing files.
- Use the chat feature to communicate with your peers during the file transfer.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **WebRTC**: For real-time peer-to-peer communication.
- **Socket.io**: For signaling and real-time event handling.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: For styling the application.
- **Aceternity & Shadcn**: For beautiful components.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
