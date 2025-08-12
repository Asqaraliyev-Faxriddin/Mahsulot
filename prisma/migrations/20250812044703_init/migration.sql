/*
  Warnings:

  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assigncourses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coursecategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `examresults` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exams` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `homeworks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `homeworksubmissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lastactivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lessonbolim` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lessonfiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lessons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lessonview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentorprofiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `purchasedcourses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `questionsanswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "assigncourses" DROP CONSTRAINT "assigncourses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "assigncourses" DROP CONSTRAINT "assigncourses_userId_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_cursecategoryId_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "examresults" DROP CONSTRAINT "examresults_lessonBolimId_fkey";

-- DropForeignKey
ALTER TABLE "examresults" DROP CONSTRAINT "examresults_userId_fkey";

-- DropForeignKey
ALTER TABLE "exams" DROP CONSTRAINT "exams_lessonBolimId_fkey";

-- DropForeignKey
ALTER TABLE "homeworks" DROP CONSTRAINT "homeworks_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "homeworksubmissions" DROP CONSTRAINT "homeworksubmissions_homeworkId_fkey";

-- DropForeignKey
ALTER TABLE "homeworksubmissions" DROP CONSTRAINT "homeworksubmissions_userId_fkey";

-- DropForeignKey
ALTER TABLE "lastactivity" DROP CONSTRAINT "lastactivity_courseId_fkey";

-- DropForeignKey
ALTER TABLE "lastactivity" DROP CONSTRAINT "lastactivity_groupId_fkey";

-- DropForeignKey
ALTER TABLE "lastactivity" DROP CONSTRAINT "lastactivity_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "lastactivity" DROP CONSTRAINT "lastactivity_userId_fkey";

-- DropForeignKey
ALTER TABLE "lessonbolim" DROP CONSTRAINT "lessonbolim_courseId_fkey";

-- DropForeignKey
ALTER TABLE "lessonfiles" DROP CONSTRAINT "lessonfiles_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "lessons" DROP CONSTRAINT "lessons_bolimId_fkey";

-- DropForeignKey
ALTER TABLE "lessons" DROP CONSTRAINT "lessons_courseId_fkey";

-- DropForeignKey
ALTER TABLE "lessonview" DROP CONSTRAINT "lessonview_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "lessonview" DROP CONSTRAINT "lessonview_userId_fkey";

-- DropForeignKey
ALTER TABLE "mentorprofiles" DROP CONSTRAINT "mentorprofiles_userId_fkey";

-- DropForeignKey
ALTER TABLE "purchasedcourses" DROP CONSTRAINT "purchasedcourses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "purchasedcourses" DROP CONSTRAINT "purchasedcourses_userId_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_courseId_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_userId_fkey";

-- DropForeignKey
ALTER TABLE "questionsanswer" DROP CONSTRAINT "questionsanswer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "questionsanswer" DROP CONSTRAINT "questionsanswer_userId_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_courseId_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_userId_fkey";

-- DropTable
DROP TABLE "Contact";

-- DropTable
DROP TABLE "Transaction";

-- DropTable
DROP TABLE "assigncourses";

-- DropTable
DROP TABLE "coursecategory";

-- DropTable
DROP TABLE "courses";

-- DropTable
DROP TABLE "examresults";

-- DropTable
DROP TABLE "exams";

-- DropTable
DROP TABLE "homeworks";

-- DropTable
DROP TABLE "homeworksubmissions";

-- DropTable
DROP TABLE "lastactivity";

-- DropTable
DROP TABLE "lessonbolim";

-- DropTable
DROP TABLE "lessonfiles";

-- DropTable
DROP TABLE "lessons";

-- DropTable
DROP TABLE "lessonview";

-- DropTable
DROP TABLE "mentorprofiles";

-- DropTable
DROP TABLE "purchasedcourses";

-- DropTable
DROP TABLE "questions";

-- DropTable
DROP TABLE "questionsanswer";

-- DropTable
DROP TABLE "rating";

-- DropEnum
DROP TYPE "CourseLevel";

-- DropEnum
DROP TYPE "ExamAnswer";

-- DropEnum
DROP TYPE "HomeworkSubStatus";

-- DropEnum
DROP TYPE "PaidVia";

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "tavsif" TEXT,
    "narx" DOUBLE PRECISION NOT NULL,
    "miqdor" INTEGER NOT NULL,
    "jamiNarx" DOUBLE PRECISION,
    "yaratilgan_vaqti" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
