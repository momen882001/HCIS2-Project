# NeuroConsult: Brain Tumor Care Platform

## Table of Contents

1. [Introduction](#1-introduction)
2. [System Overview](#2-system-overview)
   - [Main Features](#main-features)
3. [Project Demo](#3-project-demo)
4. [Screenshots](#4-screenshots)
5. [Project Structure](#5-project-structure)
   - [Patient Server](#patient-server)
   - [Doctor Server](#doctor-server)
   - [Storage & Prediction Server](#storage--prediction-server)
6. [Workflow Overview](#6-workflow-overview)
   - [Patient Interaction](#patient-interaction)
   - [Doctor Interaction](#doctor-interaction)
   - [Final Step](#final-step)
7. [Clinical Decision Support System (CDSS)](#7-clinical-decision-support-system-cdss)
   - [CDSS Overview](#cdss-overview)
8. [DICOM Viewer](#8-dicom-viewer)
   - [DICOM Viewer Features](#dicom-viewer-features)
9. [Benefits](#9-benefits)
   - [Key Benefits](#key-benefits)
10. [Technologies](#10-technologies)
11. [Contributors](#11-contributors)

## 1. Introduction

- **A web-based system for medical consultation service.**
- **Specializes in Brain Tumor diagnosis and treatment.**
- **App operates in real-time for timely consultations.**
- **Course project for HCIS2 applying on Networks in Medical Information System, Medical Information System Standards and CDSS.**

## 2. System Overview

### Main Features:

- **Patient registration and login.**
- **Submission of EHR data, complaints, vitals, and imaging scans.**
- **Doctor examination and response.**
- **Machine Learning model for Clinical Decision Support.**
- **DICOM viewer for imaging scans.**
- **Real-time functionality using web sockets and HL7 for data exchange.**

## 3. Project Demo
https://drive.google.com/file/d/1ti7VPOTQWvJ1RulaCu20WlsmuUubm45h/view?usp=drive_link

## 4. Screenshots
- Login
![Screenshot 2024-05-21 at 2 50 38 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/b33d4eac-adb6-4ac3-8648-9eb0e2ba4f25)

- Sign Up
![Screenshot 2024-05-21 at 2 50 43 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/7c49d122-8a2a-494a-a100-ec1c192a5640)

- Patient Portal
![Screenshot 2024-05-21 at 2 34 04 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/37378170-1759-4f9a-ae26-8efb78fdb7ac)

- Patient Old Requests
![Screenshot 2024-05-21 at 2 34 09 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/153dc745-f556-4c49-b2e3-c861201a5ebc)

- Patient New Requests
![Screenshot 2024-05-21 at 2 34 26 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/5b49a00c-bcf5-4a5b-962f-ab6c86d21150)

- Doctor Portal
![Screenshot 2024-05-21 at 2 34 34 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/4488c473-b5ca-45b9-a67d-601afa991687)

- Doctor Consultation - Tumor Detected
![Screenshot 2024-05-21 at 2 34 50 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/2ad6d9d6-514f-41e8-a61f-de08667ac429)

- Doctor Consultation - No Tumor Detected
![Screenshot 2024-05-21 at 2 34 44 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/7ab32248-8f40-4f44-af5f-9b810543aa96)

- DICOM Viewer
![Screenshot 2024-05-21 at 2 35 00 AM](https://github.com/momen882001/HCIS2-Project/assets/68791488/d6abc9ad-5f10-4734-9634-c84ba186ee78)


## 5. Project Structure

### Patient Server:

- Handles registration, login, and submission of medical data and consultation requests.

### Doctor Server:

- Manages receipt of consultation requests, review of patient data and scans, and communication of consultation reports.

### Storage & Prediction Server:

- Stores medical data and imaging scans.
- Integrates the machine learning model for tumor classification.

## 6. Workflow Overview

### Patient Interaction:

1. **Signup & Login:**
   - Easy and secure process.
2. **Enter Medical History:**
   - User-friendly interface for EHR data, complaints, and vitals.
3. **Request Consultation:**
   - Upload imaging scans and submit requests easily.

### Doctor Interaction:

4. **Receive Consultation Requests:**
   - Comprehensive requests including EHR, complaints, vitals, and imaging scans.
5. **Review Data:**
   - Examine imaging scans and patient information.
6. **Send Consultation Report:**
   - Provide detailed consultation based on analysis and ML model output.

### Final Step:

7. **Patient Receives Report:**
   - Patient receives consultation report from the doctor.

## 7. Clinical Decision Support System (CDSS)

### CDSS Overview:

- **Integrated machine learning model.**
- **Assists doctors by classifying tumors as present or absent.**
- **Enhances diagnostic accuracy and efficiency.**

## 8. DICOM Viewer

### DICOM Viewer Features:

- **High-quality imaging visualization.**
- **User-friendly interface for doctors to analyze scans.**
- **Essential for accurate brain tumor diagnosis.**

## 9. Benefits

### Key Benefits:

- **Improved patient outcomes.**
- **Faster and more accurate diagnoses.**
- **Enhanced decision-making support for doctors.**
- **Consistency in brain tumor diagnosis.**
- **Efficient and effective brain tumor consultations.**

## 10. Technologies

- **React, TS for Frontend**
- **Node, Express, TS for Backend**
- **Flask, Python for Storage Server and Brain Tumor Prediction**
- **HL7 for data exchange between servers**
- **DICOM for Imaging Scans**
- **Cornerstone.js for DICOM Viewer**


## 11. Contributors
<table>
    <tbody>
    <tr>
        <td align="center" valign="top" width="20%">
            <a href="https://github.com/Zeyad-Amr">
                <img alt="Zeyad Amr Fekry" src="https://avatars.githubusercontent.com/Zeyad-Amr" width="100px;">
                <br/>
                <sub><b>Zeyad Amr Fekry</b></sub>
            </a>
            <br/>
            <span>Full Stack</span>
        </td>
        <td align="center" valign="top" width="20%">
            <a href="https://github.com/AhmedRaouf481">
                <img alt="Ahmed Abd ElRaouf" src="https://avatars.githubusercontent.com/AhmedRaouf481" width="100px;">
                <br/>
                <sub><b>Ahmed Abd ElRaouf</b></sub>
            </a>
            <br/>
            <span>Full Stack</span>
        </td>
        <td align="center" valign="top" width="20%">
            <a href="https://github.com/Abdelrhman012">
                <img alt="Abdelrahman Yasser" src="https://avatars.githubusercontent.com/Abdelrhman012" width="100px;">
                <br/>
                <sub><b>Abdelrahman Yasser</b></sub>
            </a>
            <br/>
            <span>Frontend</span>
        </td>
        <td align="center" valign="top" width="20%">
            <a href="https://github.com/momen882001">
                <img alt="Mo'men Mohamed" src="https://avatars.githubusercontent.com/momen882001" width="100px;">
                <br/>
                <sub><b>Mo'men Mohamed</b></sub>
            </a>
            <br/>
            <span>Frontend</span>
        </td>
        <td align="center" valign="top" width="20%">
            <a href="https://github.com/Mazen-Aboulkhair">
                <img alt="Diaa Badr Eldin" src="https://avatars.githubusercontent.com/diaabadr" width="100px;">
                <br/>
                <sub><b>Diaa Badr Eldin</b></sub>
            </a>
            <br/>
            <span>Backend</span>
        </td>
    </tr>
</table>


### Submitted to:
Dr Eman Ayman & Eng Yara Wael

All rights reserved © 2024
