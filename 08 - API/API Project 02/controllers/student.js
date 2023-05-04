const getProfile = (req, res, next) => {
    const studentId = req.query.id;

    // query db
    res.status(200).json({
        id: studentId,
        name: "Ahmed",
        collage: 'IT'
    })
};

const getGrades = (req, res, next) => {
    res.status(200).json([
        {name: 'web', grade: 80},
        {name: 'node', grade: 40}
    ])
};

module.exports = {
    getGrades, getProfile
}