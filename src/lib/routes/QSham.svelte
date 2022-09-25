<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte';
</script>

<Main>
    <span slot="theTitle">Q Shaman Intro</span>
    <span slot="theBody">Q Shaman is here</span>
    <span slot="theByline">
        <Byline imgSource={'https://ichef.bbci.co.uk/images/ic/1920x1080/p098vq4z.jpg'}> 
            <span slot="bylineText">This is
            the QShamans profileThis is the QShamans profileThis is the QShamans profileThis is the QShamans profileThis
            is the QShamans profileThis is the QShamans profileThis is the QShamans profileThis is the QShamans
            profileThis is the QShamans profileThis is the QShamans profileThis is the QShamans profileThis is the
            QShamans profileThis is the QShamans profileThis is the QShamans profileThis is the QShamans profileThis is
            the QShamans profileThis is the QShamans profileThis is the QShamans profileThis is the QShamans profileThis
            is the QShamans profileThis is the QShamans profileThis is the QShamans profileThis is the QShamans
            profileThis is the QShamans profile
            </span>
        </Byline>
    </span>
</Main>