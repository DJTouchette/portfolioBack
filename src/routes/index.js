
export default function testRoute(app, port) {
  app.get('/', (req, res) => {
    res.send('Hello! The API is at http://localhost:' + port + ' /api');
  });
}
