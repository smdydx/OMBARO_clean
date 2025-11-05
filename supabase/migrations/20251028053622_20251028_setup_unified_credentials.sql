/*
  # Setup Unified Credentials System

  This migration sets up a system where all users can login with username='1234' and password='1234'

  1. Changes
    - Creates user_profiles table without unique constraint on mobile
    - All users will have mobile='1234' for unified login
    - Email remains unique for identification
  
  2. Security
    - This is for demo/testing purposes only
    - Production systems should use unique credentials
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS user_profiles CASCADE;

-- Create user_profiles table without mobile unique constraint
CREATE TABLE user_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile text NOT NULL,
  email text UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN (
    'customer', 'vendor', 'therapist', 'beautician', 'employee', 'admin',
    'super_admin', 'accounts_department', 'marketing_department',
    'finance_department', 'hr_department', 'it_department',
    'customer_care', 'legal_department', 'fo_department', 'staff_department',
    'vendor_list_department', 'customer_data_department', 'ho_details',
    'corporate_office', 'advocate', 'ca_cs_department', 'directors'
  )),
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended', 'terminated')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies that allow all operations for simplicity
CREATE POLICY "Allow public read access"
  ON user_profiles FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public insert"
  ON user_profiles FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public update"
  ON user_profiles FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete"
  ON user_profiles FOR DELETE
  TO anon, authenticated
  USING (true);

-- Insert all 23 users with mobile='1234'
INSERT INTO user_profiles (name, mobile, email, role, status) VALUES
  ('System Admin', '1234', 'admin@ombaro.com', 'admin', 'active'),
  ('Super Admin', '1234', 'superadmin@ombaro.com', 'super_admin', 'active'),
  ('Default Employee', '1234', 'employee@ombaro.com', 'employee', 'active'),
  ('Demo Vendor', '1234', 'vendor@ombaro.com', 'vendor', 'active'),
  ('Demo Customer', '1234', 'customer@ombaro.com', 'customer', 'active'),
  ('Demo Therapist', '1234', 'therapist@ombaro.com', 'therapist', 'active'),
  ('Demo Beautician', '1234', 'beautician@ombaro.com', 'beautician', 'active'),
  ('Accounts Department', '1234', 'accounts@ombaro.com', 'accounts_department', 'active'),
  ('Marketing Department', '1234', 'marketing@ombaro.com', 'marketing_department', 'active'),
  ('Finance Department', '1234', 'finance@ombaro.com', 'finance_department', 'active'),
  ('Legal Department', '1234', 'legal@ombaro.com', 'legal_department', 'active'),
  ('Customer Care', '1234', 'customercare@ombaro.com', 'customer_care', 'active'),
  ('HR Department', '1234', 'hr@ombaro.com', 'hr_department', 'active'),
  ('IT Department', '1234', 'it@ombaro.com', 'it_department', 'active'),
  ('Field Officer', '1234', 'fo@ombaro.com', 'fo_department', 'active'),
  ('Staff Department', '1234', 'staff@ombaro.com', 'staff_department', 'active'),
  ('Vendor List Dept', '1234', 'vendorlist@ombaro.com', 'vendor_list_department', 'active'),
  ('Customer Data Dept', '1234', 'customerdata@ombaro.com', 'customer_data_department', 'active'),
  ('HO Details', '1234', 'hodetails@ombaro.com', 'ho_details', 'active'),
  ('Corporate Office', '1234', 'corporate@ombaro.com', 'corporate_office', 'active'),
  ('Advocate', '1234', 'advocate@ombaro.com', 'advocate', 'active'),
  ('CA/CS Department', '1234', 'cacs@ombaro.com', 'ca_cs_department', 'active'),
  ('Directors', '1234', 'directors@ombaro.com', 'directors', 'active');

-- Create index on mobile and role for faster lookups
CREATE INDEX idx_user_profiles_mobile ON user_profiles(mobile);
CREATE INDEX idx_user_profiles_role ON user_profiles(role);
CREATE INDEX idx_user_profiles_mobile_role ON user_profiles(mobile, role);
