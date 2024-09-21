module.exports = {
    async headers(){
        return [
            {
                source: '/:path*',
                headers: [
                    {key: 'Access-Control-Allow-Credentials', value: 'true'},
                    {key: 'Access-Control-Allow-Origins', value: '*'},
                    {key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
                    {key: 'Access-Control-Allow-Headers', value: '*'}
                ]
            }
        ]
    }
}