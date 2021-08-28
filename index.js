import server from './src/server';

// Server Creation
server.listen(7000, (err) => {
    console.log(`Server running at port 7000`);
});