import User from '../models/User.model.js';

const dashboard = async (req, res) => {
  try {
    const email = req.header.email;
    console.log(email);
    const user = await User.aggregate([{ $match: { email } }]);

    const educations = await Education.aggregate([
      {
        $match: {
          createdAt: { $lt: new Date('2025-12-24T15:26:19.163Z') },
        },
      },
      {
        $facet: {
          total: [{ $count: 'count' }],
        },
      },
    ]);

    res.status(200).json({
      message: `Welcome to your dashboard, ${email}!`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'DASHBOARD FETCH FAILED',
      error: error.message,
    });
  }
};

export default {
  dashboard,
};
