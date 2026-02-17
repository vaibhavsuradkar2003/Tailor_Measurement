from flask import Flask, render_template, request, redirect, session, flash
import sqlite3

app = Flask(__name__)
app.secret_key = "tailor_secret"

# ===============================
# DATABASE SETUP
# ===============================
def init_db():
    conn = sqlite3.connect("tailor.db")
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            phone TEXT UNIQUE,

            shirt_length REAL,
            chest REAL,
            shoulder REAL,
            sleeve_length REAL,
            collar REAL,
            shirt_type TEXT,

            pant_length REAL,
            waist REAL,
            sit REAL,
            thigh REAL,
            knee REAL,
            bottom REAL
        )
    """)

    conn.commit()
    conn.close()

init_db()

# ===============================
# LOGIN
# ===============================
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username == "admin" and password == "9421326421":
            session['user'] = username

            flash("Welcome Master Tailor 👏", "success")
            return redirect('/dashboard')

        else:
            flash("चुकीचे यूजरनेम किंवा पासवर्ड!", "danger")
            return redirect('/')

    return render_template("login.html")


# ===============================
# DASHBOARD
# ===============================
@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        return redirect('/')

    conn = sqlite3.connect("tailor.db")
    cur = conn.cursor()

    cur.execute("SELECT COUNT(*) FROM customers")
    total_customers = cur.fetchone()[0]

    conn.close()

    return render_template("dashboard.html",
                           total_customers=total_customers)


# ===============================
# CUSTOMER LIST
# ===============================
@app.route('/customers')
def customers():
    if 'user' not in session:
        return redirect('/')

    search = request.args.get("search", "")

    conn = sqlite3.connect("tailor.db")
    cur = conn.cursor()

    if search:
        cur.execute("""
            SELECT * FROM customers
            WHERE name LIKE ? OR phone LIKE ?
        """, ('%' + search + '%', '%' + search + '%'))
    else:
        cur.execute("SELECT * FROM customers")

    customers = cur.fetchall()
    conn.close()

    return render_template("customer_list.html",
                           customers=customers,
                           search=search)


# ===============================
# ADD CUSTOMER
# ===============================
@app.route('/add', methods=['GET', 'POST'])
def add_customer():
    if 'user' not in session:
        return redirect('/')

    if request.method == 'POST':

        phone = request.form['phone']

        # Mobile validation
        if not phone.isdigit() or len(phone) != 10:
            flash("Mobile number must be exactly 10 digits", "danger")
            return redirect('/add')

        conn = sqlite3.connect("tailor.db")
        cur = conn.cursor()

        # Duplicate check
        cur.execute("SELECT id FROM customers WHERE phone=?", (phone,))
        if cur.fetchone():
            conn.close()
            flash("Mobile number already exists!", "danger")
            return redirect('/add')

        data = (
            request.form['name'],
            phone,
            request.form['shirt_length'],
            request.form['chest'],
            request.form['shoulder'],
            request.form['sleeve_length'],
            request.form['collar'],
            request.form['shirt_type'],
            request.form['pant_length'],
            request.form['waist'],
            request.form['sit'],
            request.form['thigh'],
            request.form['knee'],
            request.form['bottom']
        )

        cur.execute("""
            INSERT INTO customers (
                name, phone,
                shirt_length, chest, shoulder, sleeve_length, collar, shirt_type,
                pant_length, waist, sit, thigh, knee, bottom
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, data)

        conn.commit()
        conn.close()

        flash("Customer added successfully!", "success")
        return redirect('/dashboard')



    return render_template("add_customer.html")


# ===============================
# VIEW CUSTOMER
# ===============================
@app.route('/view/<int:id>')
def view_customer(id):
    if 'user' not in session:
        return redirect('/')

    conn = sqlite3.connect("tailor.db")
    cur = conn.cursor()

    cur.execute("SELECT * FROM customers WHERE id=?", (id,))
    customer = cur.fetchone()

    conn.close()

    return render_template("view_customer.html", customer=customer)


# ===============================
# EDIT CUSTOMER
# ===============================
@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit_customer(id):
    if 'user' not in session:
        return redirect('/')

    conn = sqlite3.connect("tailor.db")
    cur = conn.cursor()

    if request.method == 'POST':

        phone = request.form['phone']

        if not phone.isdigit() or len(phone) != 10:
            flash("Mobile number must be exactly 10 digits", "danger")
            return redirect(f"/edit/{id}")

        cur.execute(
            "SELECT id FROM customers WHERE phone=? AND id != ?",
            (phone, id)
        )

        if cur.fetchone():
            conn.close()
            flash("Mobile number already exists!", "danger")
            return redirect(f"/edit/{id}")

        cur.execute("""
            UPDATE customers
            SET name=?, phone=?,
                shirt_length=?, chest=?, shoulder=?, sleeve_length=?, collar=?, shirt_type=?,
                pant_length=?, waist=?, sit=?, thigh=?, knee=?, bottom=?
            WHERE id=?
        """, (
            request.form['name'],
            phone,
            request.form['shirt_length'],
            request.form['chest'],
            request.form['shoulder'],
            request.form['sleeve_length'],
            request.form['collar'],
            request.form['shirt_type'],
            request.form['pant_length'],
            request.form['waist'],
            request.form['sit'],
            request.form['thigh'],
            request.form['knee'],
            request.form['bottom'],
            id
        ))

        conn.commit()
        conn.close()

        flash("Customer updated successfully!", "success")
        return redirect('/dashboard')

    cur.execute("SELECT * FROM customers WHERE id=?", (id,))
    customer = cur.fetchone()
    conn.close()

    return render_template("edit_customer.html", customer=customer)


# ===============================
# DELETE CUSTOMER
# ===============================
@app.route('/delete/<int:id>')
def delete_customer(id):
    if 'user' not in session:
        return redirect('/')

    conn = sqlite3.connect("tailor.db")
    cur = conn.cursor()

    cur.execute("DELETE FROM customers WHERE id=?", (id,))
    conn.commit()
    conn.close()

    flash("Customer deleted", "warning")
    return redirect('/customers')


# ===============================
# LOGOUT
# ===============================
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')


# ===============================
# RUN APP
# ===============================
if __name__ == "__main__":
    app.run(debug=True)
