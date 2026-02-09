/*
  # Fix RLS Policy for contact_submissions

  1. Security Fix
    - Replace overly permissive RLS policy with restrictive validation
    - Ensure required fields are not empty/null
    - Prevent inserting records with incomplete data
    - Maintain anonymous access while enforcing data integrity
*/

DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_submissions;

CREATE POLICY "Allow anonymous contact form submissions with validation"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL 
    AND name != ''
    AND whatsapp IS NOT NULL 
    AND whatsapp != ''
    AND message IS NOT NULL 
    AND message != ''
  );