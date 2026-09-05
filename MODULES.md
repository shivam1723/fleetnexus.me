# FleetNexus ERP — Module Overview

> This document maps the modules available in the FleetNexus ERP. It is derived from the actual screens (`src/main/webapp/WEB-INF/views`) and the backend package layout (`src/main/java/com/fleetnexus/erp`).

---

## 1. HR & Payroll

| Area | Screens / Features |
|---|---|
| Employee Master | `employees`, `only-employees`, `employee_group`, `employee_grade`, `employement_type`, `designation`, `department`, `sub_department`, `identification_document_type` |
| Employee Lifecycle | `employee_onboarding` (+ templates), `employee_separation` (+ templates), `employee_benefit_application`, `employee_benefit_claim`, `employee_incentive`, `employee_advance`, `employee_document_type`, `retention_bonus` |
| Tax & Exemptions | `employee_tax_exemption_category`, `_declaration`, `_proof_submission`, `_sub_category`, `income_tax_slab` |
| Attendance | `attendance_list`, `attendance_report`, `attendance_request`, `shift_type`, `timesheet`, `holiday_list`, `holiday-capturing`, `compensatory_leave_request`, `purpose_of_travel`, `travel_request` |
| Leave | `leave_type`, `leave_allocation`, `leave_application`, `leave_period` |
| Payroll | `payroll_entry`, `payroll_period`, `payroll_settings`, `salary_structure`, `salary_structure_assignment`, `salary_component`, `salary_slip`, `additional_salary`, `loan_amortisation`, `deduction_cost` |
| Appraisal | `appraisal`, `appraisal_template`, `appraisal_score` |
| Recruitment | `jobPosting`, `jobApplicant` |
| Reports | `hr_report` |

## 2. Purchase / Procurement

| Area | Screens |
|---|---|
| Vendor Management | `vendor-purchase`, `supplier_quotation` |
| Purchase Orders | `vendor-purchase-order`, `purchase_orders_unregistered`, `purchase_orders_documents` |
| Purchase Invoices | `vendor-purchase-invoice`, `purchase_invoice` |
| Contracts | `purchase_contract`, `vendor-purchase` (vendor contract) |
| Goods Receipt | `goodsReceipt`, `goodsReceiptBying`, `goodsReceiptService`, `goodsReceiptVendor` |
| Quotations | `collection_quotation`, `supplier_quotation`, `quotation` |
| Buying / EPR | `purchase_epr`, `purchase` |

## 3. Sales

| Area | Screens |
|---|---|
| Sales Orders | `sales`, `sales_income`, `directsale` |
| Sales Contracts | `sales_contract` (inside `sales`) |
| Invoicing | `invoice`, `consolidated_invoice`, `debit_credit_note`, `packing_slip`, `cheque-reciepts`, `collection_quotation` |
| Delivery | `deliveryNoteSales`, `delivery_note`, `delivery_trip`, `logistic_location` |
| EPR Sales | `sales_epr` |
| Quotations | `quotation`, `collection_quotation` |

## 4. Logistics & Fleet

| Area | Screens |
|---|---|
| Vehicles | `vehicle`, `vehicles`, `drivers`, `route`, `delivery_trip`, `delivery_note` |
| Vehicle Maintenance | `maintainance`, `asset_tracking`, `machineLine`, `functional_condition`, `cosmetic_condition`, `tolerance` |
| Trips & Delivery Notes | `deliveryNoteSales`, `delivery_note`, `delivery_trip`, `logistic_location` |
| Fuel / Cost | `transpotation_cost`, `lme_fixation`, `pickup_request`, `segregation_garbage_recored`, `bag-collections` |

## 5. Accounting & Finance

| Area | Screens |
|---|---|
| Chart of Accounts | `accountinghead`, `grouphead`, `cost_center`, `mode_of_payment`, `payment_terms` |
| Vouchers | `accounting-voucher`, `bulk_accounting_voucher`, `accounting_period`, `petty_cash_*` |
| Receivables / Payables | `outstanding`, `bank_reconciliation`, `bank_confirmation`, `payment_scheduler` |
| Payments | `payment`, `payment_template`, `payment_terms` |
| Budgeting | `budget`, `fiscal_year`, `fiscal_year_hr`, `exchange_currency`, `lender` |
| Reports | `trial_report`, `trial_report` (trial balance), `customReport`, `reports`, `report`, `dashboard_reports`, `is_group_report`, `hr_report` |

## 6. Inventory & Warehouse

| Area | Screens |
|---|---|
| Items / Materials | `material`, `materialgroup`, `wasteitems`, `stockCategory`, `nfs_stock_category`, `uom`, `category`, `brand/category` |
| Stock Transactions | `stock_transaction`, `stock_transf_to_wh`, `bulk_stock`, `production_order`, `mbr`, `clm-record` |
| Warehouses | `warehouse`, `warehouse_group`, `location`, `district`, `state` |
| Asset Management | `asset_category`, `asset_group`, `asset_group_new`, `asset_line`, `assetComponent`, `assetVendor`, `asset_tracking`, `asset_tracking` |

## 7. Plant / Production

| Area | Screens |
|---|---|
| Plants | `plant`, `plant_accounting_config`, `plant_accounting_config_2` |
| Production | `production_order`, `machineLine`, `operationalExpenditure` |
| Materials / By-products | `mbr`, `wasteitems`, `material`, `functional_condition` |

## 8. Pharma (Specialized Vertical)

| Area | Screens |
|---|---|
| Pharma Clients | `pharma-client`, `pharma-waste-collection`, `pharma_client_item_rate`, `pharma_client_routes` |
| Collection & Disposal | `pharma-waste-collection`, `pharma_waste_history`, `pickup_request` |
| Certificates | `pharma-collection-certificate` (report), `pharma-client` |

## 9. CRM / Client & Lead Management

| Area | Screens |
|---|---|
| Leads | `client_lead`, `client-group`, `clientview`, `visitor_list`, `visitor_list` |
| Clients | `client-group`, `clientview`, `pharma-client` |
| Deals / Follow-up | `follow_up`, `client_lead`, `client_lead_history`, `deal` |

## 10. Project & Service

| Area | Screens |
|---|---|
| Projects | `project`, `service_order_reference` |
| Service Orders | `service_order_reference`, `operationalExpenditure`, `general_request` |

## 11. Administration & Platform

| Area | Screens |
|---|---|
| Access Control | `access`, `user`, `approval`, `approver_template`, `template` |
| Organization Setup | `org`, `branch`, `configure`, `account-settings`, `plant`, `fiscal_year` |
| Notifications | `notifications`, `notification_template`, `send_otp`, `autopilot` |
| Common / Support | `common-open`, `common-secure`, `supportForm`, `ticket`, `help_question`, `error`, `login`, `register`, `mobile` |
| Document Setup | `document_type`, `document_format`, `template`, `qrcode`, `upload` |

## 12. Automation & AI (Autopilot)

| Area | Screens |
|---|---|
| Autopilot | `autopilot` — includes AI-driven sales/purchase insights, chat history, and scheduled jobs (backend: `autopilot/`) |
| Chat / AI Assist | `chatgpt` backend service — natural-language query / chatbot (integrated with Groq + Claude Haiku fallback) |

---

## Quick reference — by top-level view folder

`accounting-voucher`, `accountinghead`, `accounting_period`, `additional_salary`, `appraisal`, `appraisal_template`, `approval`, `approver_template`, `assetComponent`, `assetVendor`, `asset_category`, `asset_group`, `asset_group_new`, `asset_line`, `asset_tracking`, `attendance_list`, `attendance_report`, `attendance_request`, `autopilot`, `bag-collections`, `bank_confirmation`, `bank_reconciliation`, `billing`, `branch`, `broker`, `broker_commission_and_fee`, `budget`, `bulk_accounting_voucher`, `category`, `cheque-reciepts`, `client-group`, `client_lead`, `clientview`, `clm-record`, `collection_quotation`, `common-open`, `common-secure`, `compensatory_leave_request`, `configure`, `consolidated_invoice`, `cosmetic_condition`, `cost_center`, `customReport`, `dashboard`, `dashboard_reports`, `debit_credit_note`, `deduction_cost`, `deliveryNoteSales`, `delivery_note`, `delivery_trip`, `department`, `designation`, `directsale`, `district`, `document_format`, `document_type`, `drivers`, `employee_advance`, `employee_benefit_application`, `employee_benefit_claim`, `employee_document_type`, `employee_grade`, `employee_group`, `employee_incentive`, `employee_onboarding`, `employee_onboarding_template`, `employee_separation`, `employee_separation_template`, `employee_tax_exemption_category`, `employee_tax_exemption_declaration`, `employee_tax_exemption_proof_submission`, `employee_tax_exemption_sub_category`, `employees`, `employement_type`, `error`, `exchange_currency`, `expense`, `expense_claim_type`, `fiscal_year`, `fiscal_year_hr`, `form-ten`, `form-two`, `form_six`, `functional_condition`, `general_request`, `goodsReceipt`, `goodsReceiptBying`, `goodsReceiptService`, `goodsReceiptVendor`, `grouphead`, `help_question`, `holiday-capturing`, `holiday_list`, `hr_report`, `identification_document_type`, `income_tax_slab`, `incoterms`, `industry`, `inventory_movement_report`, `invoice`, `is_group_report`, `jobApplicant`, `jobPosting`, `leave_allocation`, `leave_application`, `leave_period`, `leave_type`, `lender`, `lme_fixation`, `loan_amortisation`, `locale`, `location`, `login`, `logistic_location`, `machineLine`, `maintainance`, `material`, `materialgroup`, `mbr`, `meta`, `mobile`, `mode_of_payment`, `nfs_stock_category`, `notification_template`, `notifications`, `only-employees`, `operationalExpenditure`, `org`, `outstanding`, `packing_slip`, `payment`, `payment_scheduler`, `payment_template`, `payment_terms`, `payroll_entry`, `payroll_period`, `payroll_settings`, `petty_cash_denomination`, `petty_cash_opening_denomination`, `petty_cash_records`, `pharma-client`, `pharma-waste-collection`, `pickup_request`, `plant`, `plant_accounting_config`, `plant_accounting_config_2`, `production_order`, `project`, `purchase`, `purchase_contract`, `purchase_epr`, `purchase_invoice`, `purchase_orders_documents`, `purchase_orders_unregistered`, `purpose_of_travel`, `qrcode`, `quotation`, `report`, `reports`, `retention_bonus`, `route`, `salary_component`, `salary_slip`, `salary_structure`, `salary_structure_assignment`, `sales`, `sales_epr`, `sales_income`, `sales_purchase`, `segregation_garbage_recored`, `send_otp`, `service_order_reference`, `shift_type`, `state`, `stockCategory`, `stock_transaction`, `stock_transf_to_wh`, `sub_department`, `supplier_quotation`, `supportForm`, `tax_settings`, `tax_template`, `template`, `ticket`, `timesheet`, `tolerance`, `transpotation_cost`, `travel_request`, `trial_report`, `uom`, `upload`, `user`, `vehicle`, `vehicles`, `vendor-purchase`, `vendor-purchase-invoice`, `vendor-purchase-order`, `visitor_list`, `warehouse`, `warehouse_group`, `wasteitems`
