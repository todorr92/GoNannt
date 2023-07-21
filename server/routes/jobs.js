const express = require("express");
const {
  getJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobController");

const router = express.Router();

// GET all job
router.get("/jobs-board", getJobs);

// GET a single job
router.get("/jobs-board/:id", getJob);

// POST a new job
router.post("/jobs-board/post-job", createJob);

// DELETE a job
router.delete("/jobs-board/:id", deleteJob);

// UPDATE a job
router.patch("/jobs-board/:id", updateJob);

module.exports = router;
