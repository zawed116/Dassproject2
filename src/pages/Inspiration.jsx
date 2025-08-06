import React from 'react';

const Inspiration = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: '"Inter", sans-serif',
      position: 'relative'
    }}>
      {/* Filter Toggle - Top Right */}
      <section style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{ fontSize: '0.9rem' }}>Filter your liked designs</span>
        <div style={{ 
          position: 'relative',
          display: 'inline-block',
          width: '40px',
          height: '20px'
        }}>
          <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
          <span style={{
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ccc',
            transition: '.4s',
            borderRadius: '20px'
          }}></span>
        </div>
        <span style={{ fontSize: '0.9rem' }}>Off</span>
      </section>

      {/* Header Section */}
      <section style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#333' }}>
          Discover graphic design ideas & inspiration
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <input 
            type="text" 
            placeholder="Search tags and keywords" 
            style={{
              padding: '0.75rem 1rem',
              border: '1px solid #ddd',
              borderRight: 'none',
              borderRadius: '0.25rem 0 0 0.25rem',
              width: '100%',
              maxWidth: '500px',
              fontSize: '1rem'
            }}
          />
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '0 0.25rem 0.25rem 0',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Show filters ▼
          </button>
        </div>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>862,621 designs found for: all designs</p>
      </section>

      {/* Stats Section */}
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '0.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Olimpio</div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>5</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>chilibrand</div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>43</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Jani Tawarchi</div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>55</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>b_rad</div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>26</div>
        </div>
      </section>

      {/* Design Grid Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {/* Design 1 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/JvzGAELznJ0IhV7yg2IEMG6ZptI=/0x0:1000x1000/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159109/attachment_159109750" 
            alt="DARK CHRONICLES" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>DARK</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>CHRONICLES</h3>
          </div>
        </div>

        {/* Design 2 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/r1s0MGLbSP062yNQcEyTek9qzWo=/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/199/19978/1997810/ce28ae83-36e4-465c-a2a3-26277e987a50.jpg" 
            alt="FILTER'S STYLER" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>FILTER'S</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>STYLER</h3>
          </div>
        </div>

        {/* Design 3 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/4f43i8nHEWXnIK3clarlU0iqA7Y=/0x0:2040x2040/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/200/20067/2006767/6564e574-8407-4dba-9e6e-91cf2d71a048.jpg" 
            alt="MONEY SKILLS TO YOUNG ADULTS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>MONEY SKILLS TO</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>YOUNG ADULTS</h3>
          </div>
        </div>

        {/* Design 4 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/uAd5l6N-WJaNBSV_R5b7rHXh-Pw=/895x0:3447x2552/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/199/19990/1999029/123c86a5-c400-4f71-9f79-fe72764b3bf4.jpg" 
            alt="LISTENING ON THE SAME OF WHAT THANKS ALL HABITS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>LISTENING ON THE</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>SAME OF WHAT THANKS</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>ALL HABITS</h3>
          </div>
        </div>









 {/* Design 1 */}
 <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/eO0QG_92T6Gn6nWffANty1S8_ls=/444x0:1539x1095/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/200/20059/2005998/a4bb42ab-4992-463b-8576-964cb5f2a330.jpg" 
            alt="DARK CHRONICLES" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>DARK</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>CHRONICLES</h3>
          </div>
        </div>

        {/* Design 2 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/Na2G_tJvOOefvd3AWUmgugYq__Y=/578x5:1142x569/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159221/attachment_159221796" 
            alt="FILTER'S STYLER" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>FILTER'S</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>STYLER</h3>
          </div>
        </div>

        {/* Design 3 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/yXueelnOt5XCyKxvIpRZzcxik1w=/837x1511:1430x2105/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159176/attachment_159176885" 
            alt="MONEY SKILLS TO YOUNG ADULTS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>MONEY SKILLS TO</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>YOUNG ADULTS</h3>
          </div>
        </div>

        {/* Design 4 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/i3BYpLa3eFZsxRxI9fEtBup8lbg=/113x38:931x857/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159162/attachment_159162107" 
            alt="LISTENING ON THE SAME OF WHAT THANKS ALL HABITS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>LISTENING ON THE</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>SAME OF WHAT THANKS</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>ALL HABITS</h3>
          </div>
        </div>






 {/* Design 1 */}
 <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/An7YyRP56yfRyjVU3gD_vA7aa-4=/0x0:1358x1358/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159242/attachment_159242137" 
            alt="DARK CHRONICLES" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>DARK</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>CHRONICLES</h3>
          </div>
        </div>

        {/* Design 2 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/1y0oHozlC4jnyV4ozfAoFxpQjwM=/73x47:2144x2118/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/199/19986/1998653/efb393cc-ab70-4b01-8a85-6a6d7ddbc425.jpg" 
            alt="FILTER'S STYLER" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>FILTER'S</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>STYLER</h3>
          </div>
        </div>

        {/* Design 3 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/mscxOJ-VIXw3wSe0x7OW8LnVHBw=/577x4:1143x570/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159227/attachment_159227507" 
            alt="MONEY SKILLS TO YOUNG ADULTS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>MONEY SKILLS TO</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>YOUNG ADULTS</h3>
          </div>
        </div>

        {/* Design 4 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src=" https://images-workbench.99static.com/i3BYpLa3eFZsxRxI9fEtBup8lbg=/113x38:931x857/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159162/attachment_159162107" 
            alt="LISTENING ON THE SAME OF WHAT THANKS ALL HABITS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>LISTENING ON THE</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>SAME OF WHAT THANKS</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>ALL HABITS</h3>
          </div>
        </div>







 {/* Design 1 */}
 <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/jnTq7s00iP8oYqXC4Cb6GGBzsqc=/341x31:1699x1390/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159129/attachment_159129355" 
            alt="DARK CHRONICLES" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>DARK</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>CHRONICLES</h3>
          </div>
        </div>

        {/* Design 2 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src=" https://images-workbench.99static.com/ngenCkouPTvKSmV6p38miT_WwjY=/0x0:1000x1000/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159005/attachment_159005251" 
            alt="FILTER'S STYLER" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>FILTER'S</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>STYLER</h3>
          </div>
        </div>

        {/* Design 3 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/M9C14LXTPypKAckvDv5g1V9kIIQ=/382x0:1658x1276/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159163/attachment_159163495" 
            alt="MONEY SKILLS TO YOUNG ADULTS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>MONEY SKILLS TO</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>YOUNG ADULTS</h3>
          </div>
        </div>

        {/* Design 4 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="  https://images-workbench.99static.com/aGlVBwdvrtScU64USw6d66FX-ek=/341x1936:2000x3596/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159227/attachment_159227634 " 
            alt="LISTENING ON THE SAME OF WHAT THANKS ALL HABITS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>LISTENING ON THE</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>SAME OF WHAT THANKS</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>ALL HABITS</h3>
          </div>
        </div>








 {/* Design 1 */}
 <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/USISbFfUikLYOHPJQ7fxx8hZ39c=/0x0:1827x1827/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/199/19934/1993465/25ad2e7b-bbec-484a-8c7f-7bec9e79a3f4.jpg" 
            alt="DARK CHRONICLES" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>DARK</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>CHRONICLES</h3>
          </div>
        </div>

        {/* Design 2 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src=" https://images-workbench.99static.com/f336W1ABIM79dMkJ4f6fqkFSWus=/0x0:1500x1500/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/200/20016/2001602/baaae82d-09db-48bc-b192-52ab6cd63306.png" 
            alt="FILTER'S STYLER" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>FILTER'S</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>STYLER</h3>
          </div>
        </div>

        {/* Design 3 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src=" https://images-workbench.99static.com/l4lkO3HCbnDgfi_7BA9O0RV47Ms=/456x79:1563x1187/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/199/19956/1995684/0d1433a2-d668-4e57-bc68-7167a7f1b274.jpg" 
            alt="MONEY SKILLS TO YOUNG ADULTS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>MONEY SKILLS TO</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>YOUNG ADULTS</h3>
          </div>
        </div>

        {/* Design 4 */}
        <div style={{
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          ':hover': { transform: 'translateY(-5px)' }
        }}>
          <img 
            src="https://images-workbench.99static.com/Itc-nYEMwJ_8sLZ59Mj24LIBR-k=/33x33:599x599/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/159/159162/attachment_159162709  " 
            alt="LISTENING ON THE SAME OF WHAT THANKS ALL HABITS" 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>LISTENING ON THE</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>SAME OF WHAT THANKS</h3>
            <h3 style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>ALL HABITS</h3>
          </div>
        </div>










        <div className="fixed bottom-0 left-0 right-0 bg-white py-4 shadow-md">
  <div className="flex justify-center items-center gap-2 sm:gap-4 mx-auto max-w-screen-lg px-4">
    {/* Previous button */}
    <button className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">
      &lt;
    </button>
    
    {/* Page numbers */}
    <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2">
      <button className="px-3 py-1 rounded-lg bg-blue-500 text-white">1</button>
      <button className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">2</button>
      <button className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">3</button>
      <span className="px-2">...</span>
      <button className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">100</button>
    </div>
    
    {/* Next button */}
    <button className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">
      &gt;
    </button>
  </div>
</div>
















      </section>

      <div className="bg-white p-8 font-sans text-sm">
  {/* Main footer links - 4 columns inline */}
  <div className="flex flex-nowrap justify-start gap-16 mb-8">
    {/* Column 1: Design services */}
    <div className="flex flex-col">
      <div className="font-bold text-black mb-3">Design services</div>
      <div className="text-gray-600 space-y-2">
        <div>Design contests</div>
        <div>1-to-1 Projects</div>
        <div>Find a designer</div>
        <div>Discover inspiration</div>
      </div>
    </div>

    {/* Column 2: Support */}
    <div className="flex flex-col">
      <div className="font-bold text-black mb-3">Support</div>
      <div className="text-gray-600 space-y-2">
        <div>Help</div>
        <div>Become a designer</div>
        <div>Blog</div>
        <div>98awards</div>
      </div>
    </div>

    {/* Column 3: Resources */}
    <div className="flex flex-col">
      <div className="font-bold text-black mb-3">Resources</div>
      <div className="text-gray-600 space-y-2">
        <div>Pricing</div>
        <div>Contact</div>
        <div>99designs Studio</div>
        <div>99designs Pro</div>
      </div>
    </div>

    {/* Column 4: Company */}
    <div className="flex flex-col">
      <div className="font-bold text-black mb-3">Company</div>
      <div className="text-gray-600">
        <div>About</div>
      </div>
    </div>
  </div>

  {/* Bottom copyright section */}
  <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
    <div className="text-gray-500">
      © 99designs | by Vista | Terms and Conditions | Privacy
    </div>
    <div className="flex gap-4">
      <span className="text-gray-500">English</span>
      <span className="text-gray-500">español</span>
    </div>
  </div>
</div>



    </div>
  );
};

export default Inspiration;