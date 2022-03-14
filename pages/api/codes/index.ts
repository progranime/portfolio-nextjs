import { codes } from 'shared/mock-api-data/codes'

function handler(req: any, res: any) {
    if (req.method === 'GET') {
        res.status(200).json({
            codes
        })
        return
    }
}

export default handler
