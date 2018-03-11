module: {
    loaders: [
        {
            test: /.js$/,
            loaders: 'buble',
            include: path.join(__dirname, 'src'),
            query: {
                objectAssign: 'Object.assign'
            }
        }
    ]
}