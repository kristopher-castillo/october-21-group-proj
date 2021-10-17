from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', money=200, password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', money=100, password='password')
    bobbie = User(
        username='bobbie', email='bill@aa.io', money=100, password='password')
    bill = User(
        username='bill', email='billie@aa.io', money=1000, password='password'
    )
    eric = User(
        username='eric', email='eric@aa.io', money=1000, password='password'
    )
    kevin = User(
        username='kevin', email='kevin@aa.io', money=1000, password='password'
    )
    sam = User(
        username='sam', email='sam@aa.io', money=1000, password='password'
    )
    michelle = User(
        username='michelle', email='michelle@aa.io', money=1000, password='password'
    )
    jason = User(
        username='jason', email='jason@aa.io', money=1000, password='password'
    )
    henry = User(
        username='henry', email='henry@aa.io', money=1000, password='password'
    )
    amber = User(
        username='amber', email='amber@aa.io', money=1000, password='password'
    )
    kathy = User(
        username='kathy', email='kathy@aa.io', money=1000, password='password'
    )
    annie = User(
        username='annie', email='annie@aa.io', money=1000, password='password'
    )
    steven = User(
        username='steven', email='steven@aa.io', money=1000, password='password'
    )
    frank = User(
        username='frank', email='frank@aa.io', money=1000, password='password'
    )
    tony = User(
        username='tony', email='tony@aa.io', money=1000, password='password'
    )


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(bill)
    db.session.add(eric)
    db.session.add(kathy)
    db.session.add(annie)
    db.session.add(steven)
    db.session.add(kevin)
    db.session.add(sam)
    db.session.add(michelle)
    db.session.add(jason)
    db.session.add(henry)
    db.session.add(amber)
    db.session.add(frank)
    db.session.add(tony)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
