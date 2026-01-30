// Copyright (c) 2026, demo and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	onload(frm) {
        calculate_amount(frm);
	},
    estimated_km(frm){
        calculate_amount(frm);
    }
});

function calculate_amount(frm){
    console.log("in calculate amount")
    let km_amount = flt(frm.doc.price_per_km) * flt(frm.doc.estimated_km)
    let total = 0;
    (frm.doc.services || []).forEach(row => {
        total += flt(row.amount)
        
    });
    frm.set_value('total_amount', km_amount+total)
    
}
