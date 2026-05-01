"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/src/data/projects";

const MotionLink = motion.create(Link);

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionLink
      className="project"
      href={`/projects/${project.slug}`}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover="hover"
    >
      <div className="proj-num">{project.number}</div>
      <div>
        <div className="proj-title">{project.title}</div>
        <div className="proj-desc">{project.description}</div>
      </div>
      <div className="proj-tags">
        {project.tags.map((tag) => (
          <span className="proj-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <motion.div
        className="proj-arrow"
        variants={{
          hover: {
            x: 4,
            color: "#f06a5f",
          },
        }}
        transition={{ duration: 0.25 }}
      >
        -&gt;
      </motion.div>
    </MotionLink>
  );
}
