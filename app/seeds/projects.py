from app.models import db, Project


#title, description, goal, current_ammount, categories_id, user_id, image_url


def seed_projects():
    pico_speakers = Project(title='Pico Bello Speakers',
                            description="Often people who love high-quality sound have to compromise on speaker aesthetics for the sake of sound quality. \
                                        Having seen what is generally available even at the very highest prices (often in the tens of thousands of euros) \
                                        I believe there is a real gap in the market. I want to build beautiful unique wooden speakers that will look really \
                                        stunning in your living space, while also producing amazing sound.",
                            goal=7521,
                            current_amount=2000,
                            categories_id=3,
                            user_id=1,
                            image_url="https://ksr-ugc.imgix.net/assets/034/889/359/868288bc5f31471bbc831a07d8c5672d_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1631720864&auto=format&frame=1&lossless=true&s=ef81179c4441e16698fa44f8ffd04d7f")

    mythwind = Project(title='Mythwind',
                        description="Mythwind is a persistent-world, asymmetrical and cooperative boardgame where you become a pioneer in a whimsical fantasy world.",
                        goal=80222,
                        current_amount=689925,
                        categories_id=6,
                        user_id=2,
                        image_url="https://i.ytimg.com/vi/tspHA2xTHBQ/maxresdefault.jpg"
                        )

    zelda_album = Project(title='Trio of the Goddesses - Zelda Album Project',
                            description="A professionally recorded album of The Legend of Zelda by the Laurence Manning trio (piano, violin and cello)",
                            goal=7621,
                            current_amount=8860,
                            categories_id=7,
                            user_id=3,
                            image_url="https://ksr-ugc.imgix.net/assets/034/914/804/bbfee37aff368eef9395d5ef0af8f484_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1631893616&auto=format&frame=1&lossless=true&s=466a30bfa3708edf6ebe758243a31764")

    db.session.add(pico_speakers)
    db.session.add(mythwind)
    db.session.add(zelda_album)

    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
